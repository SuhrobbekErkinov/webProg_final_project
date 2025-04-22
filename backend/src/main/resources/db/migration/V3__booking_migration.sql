CREATE TABLE bookings (
                          id BIGINT AUTO_INCREMENT PRIMARY KEY,
                          gender VARCHAR(10) NOT NULL,
                          service VARCHAR(50) NOT NULL,
                          master VARCHAR(250) NOT NULL,
                          date DATE NOT NULL,
                          time TIME NOT NULL
);
