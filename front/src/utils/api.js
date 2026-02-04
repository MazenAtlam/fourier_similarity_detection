// API utility for fetching data

const API_BASE_URL = '/api/v1';

/**
 * Sends a request to the Pass Sequence Detector endpoint.
 * @param {Object} payload - The data to send (e.g., { sequence_path: "..." } or metadata).
 * @returns {Promise<Object>} - The JSON response from the API.
 */
export const detectPassSequence = async (payload) => {
    try {
        const response = await fetch(`${API_BASE_URL}/pass_sequences/detect`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

/**
 * Sends a request to count the number of sequences in a specific file.
 * @param {string} sequencePath - The path to the sequence file.
 * @returns {Promise<Object>} - The JSON response containing sequence_count.
 */
export const getSequenceCount = async (sequencePath) => {
    try {
        const response = await fetch(`${API_BASE_URL}/pass_sequences/count`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sequence_path: sequencePath }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API Error (Count):', error);
        throw error;
    }
};