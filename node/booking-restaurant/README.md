# Restaurant Table Booking System

A Node.js backend API for managing restaurant table bookings.

## Features

- Get list of all bookings (admin)
- Create new bookings
- Check booking status
- Cancel bookings

## Prerequisites
IZDE63G32UWMBTUKTHDZ67PMS6RT4KZ6V2BXPPKJ6XM7DJOQZRN3QI5OA6YWEKCO
- Node.js (v14 or higher)
- AWS Account (for MongoDB Atlas)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your MongoDB Atlas credentials:
   ```
   PORT=3000
   MONGODB_URI=mongodb+srv://your_username:your_password@your-cluster-url/restaurant?retryWrites=true&w=majority
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Deployment to AWS

1. Create a MongoDB Atlas cluster:
   - Go to https://www.mongodb.com/cloud/atlas/register
   - Create a free account
   - Create a new cluster (M0 free tier)
   - Get your connection string

2. Create an AWS ECS cluster:
   - Create an ECS cluster with Fargate
   - Create a task definition using `task-definition.json`
   - Create an ECS service
   - Set up Application Load Balancer

3. Deploy to ECS:
   - Build and push your Docker image to ECR
   - Update the task definition with your ECR image URI
   - Deploy the service

**Note:** Never commit your `.env` file to git. Use `.env.example` as a template.

## API Endpoints

### Get All Bookings (Admin)
- **GET** `/api/bookings`
- Returns list of all bookings

### Create New Booking
- **POST** `/api/bookings`
- Required fields:
  - customerName (string)
  - mobileNumber (string)
  - numberOfPersons (number)
  - bookingDate (ISO date string)
  - bookingTime (string)

### Check Booking Status
- **GET** `/api/bookings/:id`
- Returns booking details by ID

### Cancel Booking
- **PATCH** `/api/bookings/:id/cancel`
- Cancels a booking by ID

## Example Request

```json
POST /api/bookings
{
    "customerName": "John Doe",
    "mobileNumber": "1234567890",
    "numberOfPersons": 4,
    "bookingDate": "2024-03-20",
    "bookingTime": "19:00"
}
``` 

All API endpoints are working correctly:

POST /api/bookings - ✅ Successfully created a booking
GET /api/bookings - ✅ Successfully retrieved all bookings
GET /api/bookings/:id - ✅ Successfully retrieved a specific booking
PATCH /api/bookings/:id/cancel - ✅ Successfully cancelled a booking