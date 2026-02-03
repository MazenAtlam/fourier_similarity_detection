import requests
import json

# Match 10503 (Argentina vs Australia) - User's example
match_id = "10503"
length = 6
url = f"http://127.0.0.1:5000/api/v1/sequences/count?match_id={match_id}&length={length}"

print(f"GET {url}")
try:
    response = requests.get(url)
    print(f"Status: {response.status_code}")
    print(json.dumps(response.json(), indent=2))
except Exception as e:
    print(f"Request failed: {e}")
