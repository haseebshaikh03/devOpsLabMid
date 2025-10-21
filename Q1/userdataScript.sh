#!/bin/bash
# Update all installed packages
sudo apt update -y

# Install the Apache web server
sudo apt install -y apache2

# Start the Apache service
sudo systemctl start apache2

# Enable Apache to start on boot
sudo systemctl enable apache2

# Create a simple HTML file
sudo rm -f /var/www/html/index.html
sudo touch /var/www/html/index.html
echo '<br><center><h1>Welcome to my AWS EC2 Instance!</h1></center>' | sudo tee /var/www/html/index.html