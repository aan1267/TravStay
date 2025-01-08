import axios from 'axios';
import { describe, it, expect, vi } from 'vitest';

vi.mock('axios');

describe('Fetch data from the base URL using Axios', () => {
  const mockData = [
    { title: "Luxury Apartment", price: 30000, location: "Mumbai" },
    { title: "Beach Villa", price: 45000, location: "Goa" }
  ];


  it('should fetch data successfully from base URL', async () => {
    axios.get.mockResolvedValueOnce({ status: 200, data: mockData });

    const response = await axios.get('/listings');

    expect(response.status).toBe(200);
    expect(response.data).toEqual(mockData);
  });

  it('should handle error if API returns 404', async () => {
    axios.get.mockRejectedValueOnce({
      response: {
        status: 404,
        data: 'Not Found'
      }
    });
  try {
    await axios.get('/listings');
  } catch (error) {
    expect(error.response.status).toBe(404);
    expect(error.response.data).toBe('Not Found');
  }
  });
});

