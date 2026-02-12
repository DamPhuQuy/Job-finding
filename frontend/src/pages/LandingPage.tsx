import {
  AttachMoney,
  Business,
  Place,
  Schedule,
  Search,
  WorkOutline,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { featuredJobs, jobTypes } from "../data/mockData";
import { JobType } from "../types";

const LandingPage: React.FC = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState<JobType>("All Types");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", { jobTitle, location, jobType });
  };

  const getJobTypeStyles = (type: string) => {
    const styles: Record<string, { bgcolor: string; color: string }> = {
      "Full-time": { bgcolor: "#dcfce7", color: "#166534" },
      "Part-time": { bgcolor: "#e0f2fe", color: "#075985" },
      Contract: { bgcolor: "#fef9c3", color: "#854d0e" },
      Remote: { bgcolor: "#ffe4e6", color: "#9f1239" },
    };

    return styles[type] || { bgcolor: "#e2e8f0", color: "#334155" };
  };

  return (
    <Box minHeight="100vh" bgcolor="background.default">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.5 }}>
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              flexGrow={1}
            >
              <WorkOutline color="primary" />
              <Typography variant="h6" fontWeight={700} color="text.primary">
                JobFinder
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Button color="inherit">Find Jobs</Button>
              <Button color="inherit">Companies</Button>
              <Button color="inherit">Post a Job</Button>
            </Stack>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Button color="inherit">Sign In</Button>
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          background:
            "radial-gradient(circle at top, #ecfeff 0%, #f8fafc 45%, #f1f5f9 100%)",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Stack spacing={2} maxWidth={760}>
              <Typography variant="h2" component="h1">
                Find your next role in a market that moves fast
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Search curated openings from companies hiring for impact. Start
                with the role, filter with precision, and apply in minutes.
              </Typography>
            </Stack>
            <Paper
              component="form"
              onSubmit={handleSearch}
              elevation={6}
              sx={{
                width: "100%",
                maxWidth: 980,
                p: { xs: 3, md: 4 },
                borderRadius: 4,
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={5}>
                  <TextField
                    fullWidth
                    label="Job title"
                    placeholder="e.g. Software Engineer"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Location"
                    placeholder="City or Remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Place color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    select
                    fullWidth
                    label="Job type"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value as JobType)}
                  >
                    {jobTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ px: 6 }}
                  >
                    Search Jobs
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <Stack spacing={1} alignItems="center">
              <Typography variant="body2" color="text.secondary">
                Popular searches
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                justifyContent="center"
              >
                {[
                  "Frontend Developer",
                  "Product Manager",
                  "Data Scientist",
                  "UX Designer",
                  "DevOps",
                ].map((term) => (
                  <Chip key={term} label={term} clickable variant="outlined" />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={1} textAlign="center" mb={6}>
          <Typography variant="h3">Featured roles</Typography>
          <Typography color="text.secondary">
            Handpicked opportunities from teams building the future.
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {featuredJobs.map((job) => (
            <Grid item xs={12} md={6} lg={4} key={job.id}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  transition: "0.2s ease",
                  "&:hover": {
                    boxShadow: 6,
                    borderColor: "primary.light",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" mb={2}>
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 3,
                        bgcolor: "#ccfbf1",
                      }}
                    >
                      <Business color="primary" />
                    </Stack>
                    <Chip
                      label={job.type}
                      size="small"
                      sx={getJobTypeStyles(job.type)}
                    />
                  </Stack>
                  <Typography variant="h6" gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {job.company}
                  </Typography>
                  <Stack spacing={1.2} mb={3}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Place fontSize="small" color="action" />
                      <Typography variant="body2">{job.location}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AttachMoney fontSize="small" color="action" />
                      <Typography variant="body2" fontWeight={600}>
                        {job.salaryRange}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Schedule fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {job.postedDate}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Button fullWidth variant="contained">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Stack alignItems="center" mt={6}>
          <Button variant="outlined" size="large">
            View All Jobs
          </Button>
        </Stack>
      </Container>

      <Box sx={{ bgcolor: "#f1f5f9", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <WorkOutline color="primary" />
                  <Typography variant="h6">JobFinder</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Build your next chapter with a platform built for clarity,
                  speed, and real hiring signals.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1" fontWeight={600} mb={1}>
                    For Job Seekers
                  </Typography>
                  <Stack spacing={1}>
                    <Button variant="text" color="inherit">
                      Browse Jobs
                    </Button>
                    <Button variant="text" color="inherit">
                      Career Advice
                    </Button>
                    <Button variant="text" color="inherit">
                      Resume Builder
                    </Button>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1" fontWeight={600} mb={1}>
                    For Employers
                  </Typography>
                  <Stack spacing={1}>
                    <Button variant="text" color="inherit">
                      Post a Job
                    </Button>
                    <Button variant="text" color="inherit">
                      Talent Search
                    </Button>
                    <Button variant="text" color="inherit">
                      Pricing
                    </Button>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1" fontWeight={600} mb={1}>
                    Company
                  </Typography>
                  <Stack spacing={1}>
                    <Button variant="text" color="inherit">
                      About Us
                    </Button>
                    <Button variant="text" color="inherit">
                      Contact
                    </Button>
                    <Button variant="text" color="inherit">
                      Privacy Policy
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4 }} />
          <Typography variant="body2" color="text.secondary" align="center">
            2024 JobFinder. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
