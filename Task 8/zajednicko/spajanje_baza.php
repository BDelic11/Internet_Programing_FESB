<?php
$mysqli = new mysqli("localhost", "DelicB", "DelicB_2022", "DelicB");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
?>