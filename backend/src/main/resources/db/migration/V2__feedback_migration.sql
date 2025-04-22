CREATE TABLE feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  master_name VARCHAR(100) NOT NULL,
  service_name VARCHAR(100) NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  feedback_text varchar(650) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);