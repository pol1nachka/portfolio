<?php
/*db_connect.php 
	This file is a tiny resource used to connect to the database.
  It is used by all the files in your app
*/

//Connection Information
$host = "localhost";  // always this value
$db = "polina35_ex";    // your database
$user = "polina35";    // your student id
$pass = "n_w1o50L4";      // your password

//Establish connection: host, user, password, database
//The connection variable is called $dbi
$db_connect = mysqli_connect($host,$user,$pass,$db);
if ($db_connect->connect_error) {
    die('Connect Error (' . $db_connect->connect_errno . ') ' . $db_connect->connect_error);
}
?>