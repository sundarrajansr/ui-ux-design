# Restaurant Table Booking System

A Node.js backend API for managing restaurant table bookings.

## Features

- Get list of all bookings (admin)
- Create new bookings
- Check booking status
- Cancel bookings

## Prerequisites

- Node.js (v14 or higher)
- Podman (for MongoDB container)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start MongoDB container with Podman:
   ```bash
   podman rm -f mongodb || true  # Stop any existing MongoDB container
   podman run -d --name mongodb --network host \
     -e MONGO_INITDB_ROOT_USERNAME=root \
     -e MONGO_INITDB_ROOT_PASSWORD=example \
     docker.io/mongo:latest
   ```
4. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://root:example@127.0.0.1:27017/restaurant?authSource=admin&directConnection=true
   ```
5. Start the server:
   ```bash
   npm start
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