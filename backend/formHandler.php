<?php

// Include PHPMailer manually
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

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
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'adityalohar5838@gmail.com';  // Your Gmail address
        $mail->Password = 'lxtz otmq yftc luyw';   // Your Gmail password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;



        
        // Recipients
        $mail->setFrom($email, $name);                           // Sender's email and name
        $mail->addAddress('adityalohar5838@gmail.com', 'Recipient Name'); // Replace with your recipient email

        // Content
        $mail->isHTML(true);                                     
        $mail->Subject = $subject;
        $mail->Body = '
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
            <h2 style="color: #0e6eb8;">📬 New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                    <td style="padding: 8px; background-color: #f4f4f4; width: 150px;"><strong>Name:</strong></td>
                    <td style="padding: 8px;">' . htmlspecialchars($data['name']) . '</td>
                </tr>
                <tr>
                    <td style="padding: 8px; background-color: #f4f4f4;"><strong>Email:</strong></td>
                    <td style="padding: 8px;">' . htmlspecialchars($data['email']) . '</td>
                </tr>
                <tr>
                    <td style="padding: 8px; background-color: #f4f4f4;"><strong>Subject:</strong></td>
                    <td style="padding: 8px;">' . htmlspecialchars($data['subject']) . '</td>
                </tr>
                <tr>
                    <td style="padding: 8px; background-color: #f4f4f4;"><strong>Message:</strong></td>
                    <td style="padding: 8px;">' . nl2br(htmlspecialchars($data['message'])) . '</td>
                </tr>
            </table>
            <p style="margin-top: 30px; font-size: 13px; color: #777;">
                This message was sent via the ADITYA PORTFOLIO contact form.
            </p>
        </div>
    ';
                          // The body of the email (HTML)

        // Send the email
        if ($mail->send()) {
            echo json_encode(["status" => "success", "message" => "Email sent", "data" => $data]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to send email"]);
        }
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Mailer Error: " . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "No data received"]);
}
?>
