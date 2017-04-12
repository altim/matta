<?php
	$name = $_REQUEST['name'];
	$email = $_REQUEST['email'];
	$phone = $_REQUEST['phone'];
	$messagebody = $_REQUEST['message'];
	$to = "info@mattashop.ch";
	$subject = "Email from the matta form";

	$message = "Email from matta form.\n";
	$message .= "Sent by: ".$name." \n";
	$message .= "Email: ".$email." \n";
	$message .= "Phone: ".$phone." \n\n";
	$message .= $messagebody;

	mail($to,$subject,$message);
	
	echo "OK";
?>