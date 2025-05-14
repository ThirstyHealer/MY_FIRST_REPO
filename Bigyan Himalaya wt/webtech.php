<?php
// Server connection details
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "webtech1"; // Database name

// Create connection to MySQL server
$conn = new mysqli($servername, $username, $password);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create the database "webtech1" if it does not exist
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Database '$dbname' created successfully.<br>";
} else {
    echo "Error creating database: " . $conn->error . "<br>";
}

// Select the "webtech1" database to use
$conn->select_db($dbname);

// Create the table "students" if it does not exist
$sql_create_table = "CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contact VARCHAR(15) NOT NULL
)";
if ($conn->query($sql_create_table) === TRUE) {
    echo "Table 'students' created successfully.<br><br>";
} else {
    echo "Error creating table: " . $conn->error . "<br>";
}

// Insert 5 records into the "students" table
$sql_insert = "INSERT INTO students (first_name, last_name, email, contact) VALUES 
    ('John', 'Doe', 'john.doe@example.com', '1234567890'),
    ('Jane', 'Smith', 'jane.smith@example.com', '2345678901'),
    ('Mark', 'Johnson', 'mark.johnson@example.com', '3456789012'),
    ('Emma', 'Brown', 'emma.brown@example.com', '4567890123'),
    ('Lucas', 'Davis', 'lucas.davis@example.com', '5678901234')";

if ($conn->query($sql_insert) === TRUE) {
    echo "5 records inserted successfully.<br><br>";
} else {
    echo "Error inserting records: " . $conn->error . "<br>";
}

// Fetch and display all records from the "students" table
$sql_select = "SELECT * FROM students";
$result = $conn->query($sql_select);

if ($result->num_rows > 0) {
    // Output data of each row
    echo "<table border='1'>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact</th>
            </tr>";
    
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row['id'] . "</td>
                <td>" . $row['first_name'] . "</td>
                <td>" . $row['last_name'] . "</td>
                <td>" . $row['email'] . "</td>
                <td>" . $row['contact'] . "</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "No records found.<br>";
}

// Close the connection
$conn->close();
?>
