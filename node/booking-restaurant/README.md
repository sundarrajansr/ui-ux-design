# Restaurant Table Booking System

A Node.js backend API for managing restaurant table bookings.

## Features

- Get list of all bookings (admin)
- Create new bookings
- Check booking status
- Cancel bookings

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/restaurant-booking
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

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