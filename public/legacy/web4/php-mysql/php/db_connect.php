<?php
/*db_connect.php 
	This file is a tiny resource used to connect to the database.
  It is used by all the files in your app
*/

//Connection Information
$host = "localhost";  // always this value
$db = "polina35_demo";    // your database
$user = "pol";    // your student id
$pass = "n1&00z0Ww";      // your password

//Establish connection: host, user, password, database
//The connection variable is called $dbi
$db_connect = mysqli_connect($host,$user,$pass,$db);
if ($db_connect->connect_error) {
    die('Connect Error (' . $db_connect->connect_errno . ') ' . $db_connect->connect_error);
}
?>