<?php
// Include the Composer autoloader or manually include PHPMailer if not using Composer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // For Composer users, this will include PHPMailer

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Get the raw POST data
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    // For debugging, write the received data to a file
    file_put_contents("debug.txt", print_r($data, true));

    // Extract the form fields from the POST data
    $name = $data['name'];
    $email = $data['email'];
    $subject = $data['subject'];
    $message = $data['message'];

    // Set up PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Set mailer to use SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';  // Set the SMTP server to send through
        $mail->SMTPAuth   = true;  // Enable SMTP authentication
        $mail->Username   = 'adityalohar5838@gmail.com';  // SMTP username
        $mail->Password   = 'your-email-password';  // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // Enable TLS encryption
        $mail->Port       = 587;  // TCP port to connect to
    
        // Set the sender and recipient
        $mail->setFrom('adityalohar5838@gmail.com', 'Sender Name');
        $mail->addAddress('adityalohar5838@gmail.com', 'Recipient Name');  // Add a recipient
    
        // Subject and body
        $mail->Subject = 'Subject of the email';
        $mail->Body    = 'This is the body of the email';
    
        // Send email
        if ($mail->send()) {
            echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
        } else {
            echo json_encode([
                "status" => "error", 
                "message" => "Mailer Error: " . $mail->ErrorInfo
            ]);
        }
    
    } catch (Exception $e) {
        echo json_encode([
            "status" => "error", 
            "message" => "Exception: " . $e->getMessage()
        ]);
    }
    
    
} else {
    echo json_encode(["status" => "error", "message" => "No data received"]);
}
?>
