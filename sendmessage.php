<?php
	$name = $_REQUEST['name'];
	$email = $_REQUEST['email'];
	$phone = $_REQUEST['pehon'];
	$messagebody = $_REQUEST['message'];
	$to = "aleksandartimic@gmail.com";
	$subject = "Email from the matta form";

	$message = "Email from matta form.\n";
	$message .= "Sent by: ".$name." \n";
	$message .= "Email: ".$email." \n\n";
	$message .= "Phone: ".$phone." \n\n";
	$message .= $messagebody;

	mail($to,$subject,$message);
	
	echo "OK";
?>