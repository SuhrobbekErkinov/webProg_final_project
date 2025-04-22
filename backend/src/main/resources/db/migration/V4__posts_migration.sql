CREATE TABLE posts (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       master_id INT NOT NULL,
                       img_url VARCHAR(255),
                       cost VARCHAR(255),
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);