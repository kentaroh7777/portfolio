#!/bin/bash

# Kill existing Next.js processes
pkill -f "next dev" 2>/dev/null || true

# Wait a moment
sleep 1

# Start development server in background and detach
nohup npm run dev > scripts/server.log 2>&1 &

# Save the PID
echo $! > scripts/server.pid

echo "Development server started in background"
echo "PID: $(cat scripts/server.pid)"
echo "URL: http://localhost:3000"
echo "Logs: scripts/server.log"

# Wait for server to be ready (max 10 seconds)
for i in {1..10}; do
    if curl -s http://localhost:3000 > /dev/null 2>&1; then
        echo "Server is ready!"
        exit 0
    fi
    sleep 1
done

echo "Server starting... (check logs if needed)"
