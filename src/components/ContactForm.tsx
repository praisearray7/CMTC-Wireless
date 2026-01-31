'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Autocomplete,
  Alert,
  Snackbar
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { fetchServicesData, type ServiceDetail } from '../data/services';
import { colors } from '../theme/colors';

const ContactForm = () => {
  const searchParams = useSearchParams();

  // Form State
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // State for new fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Data State
  const [servicesData, setServicesData] = useState<ServiceDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Feedback State
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  );
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = async () => {
    setSubmitStatus('submitting');
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('device', selectedDevice || '');
      formData.append('service', selectedService || '');
      formData.append('message', message);
      if (image) {
        formData.append('image', image);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        // Note: No headers here, browser sets multipart boundary automatically
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSnackbarOpen(true);
        // Reset form
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setSelectedDevice(null);
        setSelectedService(null);
        setImage(null);
      } else {
        setError(data.error || 'Failed to send message.');
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
      setSubmitStatus('error');
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchServicesData();
        setServicesData(data);
      } catch (err) {
        setError('Failed to load service options.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const devices = useMemo(() => {
    return Array.from(new Set(servicesData.map((s) => s.device))).sort();
  }, [servicesData]);

  const services = useMemo(() => {
    if (!selectedDevice) return [];
    return servicesData
      .filter((s) => s.device === selectedDevice)
      .map((s) => s.service)
      .sort();
  }, [selectedDevice, servicesData]);

  // Handle incoming state from other pages - Immediate Population
  useEffect(() => {
    const deviceModel = searchParams?.get('deviceModel');
    const serviceType = searchParams?.get('serviceType') || searchParams?.get('serviceNeeded');

    if (deviceModel) {
      setSelectedDevice(deviceModel);
    }
    if (serviceType) {
      setSelectedService(serviceType);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!image) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  return (
    <Card sx={{ borderRadius: 4, boxShadow: '0 10px 40px rgba(0,0,0,0.1)', height: '100%' }}>
      <CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Typography
          variant='h5'
          sx={{ fontWeight: 700, mb: 4, color: colors.primary, textAlign: 'center' }}
        >
          Get Instant Quote
        </Typography>

        {loading && <Typography>Loading options...</Typography>}
        {!loading && servicesData.length === 0 && (
          <Alert severity='warning'>No service data loaded. Please refresh.</Alert>
        )}

        {error && <Alert severity='error'>{error}</Alert>}

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label='Full Name'
              fullWidth
              variant='outlined'
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{ sx: { borderRadius: 2 } }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label='Phone Number'
              fullWidth
              variant='outlined'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              InputProps={{ sx: { borderRadius: 2 } }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              label='Email Address'
              type='email'
              fullWidth
              variant='outlined'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{ sx: { borderRadius: 2 } }}
            />
          </Grid>

          {/* Device Selection */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Autocomplete
              freeSolo
              options={devices}
              value={selectedDevice}
              loading={loading}
              onChange={(_, newValue) => {
                setSelectedDevice(newValue);
                setSelectedService(null);
              }}
              onInputChange={(_, newInputValue) => {
                setSelectedDevice(newInputValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Device Model/Category'
                  variant='outlined'
                  InputProps={{ ...params.InputProps, sx: { borderRadius: 2 } }}
                />
              )}
            />
          </Grid>

          {/* Service Selection */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Autocomplete
              freeSolo
              options={services}
              value={selectedService}
              loading={loading}
              onChange={(_, newValue) => setSelectedService(newValue)}
              onInputChange={(_, newInputValue) => {
                setSelectedService(newInputValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Repair Service Name'
                  variant='outlined'
                  InputProps={{ ...params.InputProps, sx: { borderRadius: 2 } }}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              label='How can we help?'
              multiline
              rows={4}
              fullWidth
              variant='outlined'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              InputProps={{ sx: { borderRadius: 2 } }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Box>
              <Button
                component='label'
                variant='outlined'
                fullWidth
                sx={{ py: 1.5, borderRadius: 2, borderStyle: 'dashed' }}
              >
                {image ? `Selected: ${image.name}` : 'Upload Your Device Image (Optional)'}
                <input
                  type='file'
                  hidden
                  accept='image/*'
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setImage(e.target.files[0]);
                    }
                  }}
                />
              </Button>

              {image && previewUrl && (
                <Box sx={{ mt: 2, position: 'relative', display: 'inline-block' }}>
                  <Box
                    component='img'
                    src={previewUrl}
                    alt='Device preview'
                    sx={{
                      width: 100,
                      height: 100,
                      objectFit: 'cover',
                      borderRadius: 2,
                      border: '1px solid #eee'
                    }}
                  />
                  <Button
                    size='small'
                    onClick={() => setImage(null)}
                    aria-label='Remove selected image'
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      minWidth: 'auto',
                      width: 32,
                      height: 32,
                      p: 0,
                      bgcolor: '#ef5350',
                      color: 'white',
                      borderRadius: '50%',
                      '&:hover': { bgcolor: '#d32f2f' }
                    }}
                  >
                    ×
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              variant='contained'
              color='primary'
              size='large'
              fullWidth
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              disabled={submitStatus === 'submitting'}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                color: '#fff',
                fontWeight: 700
              }}
            >
              {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </Button>
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={() => setSnackbarOpen(false)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <Alert
                onClose={() => setSnackbarOpen(false)}
                severity='success'
                sx={{ width: '100%' }}
              >
                Message sent successfully! We will get back to you soon.
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
