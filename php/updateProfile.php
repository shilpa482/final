<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$id = trim($request->id);
$name = trim($request->name);
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$phone =  mysqli_real_escape_string($mysqli,trim($request->phone));
$branch =  mysqli_real_escape_string($mysqli,trim($request->branch));

$sql = "UPDATE students SET name='$name', email='$email', phone='$phone', branch='$branch'  WHERE id='$id'";
//$sql .= " WHERE id='$id';
echo " Id is  "+ $id;

if ($mysqli->query($sql) === TRUE) {
} else {
    echo "Error " . $sql . "<br>" . $mysqli->error;
}
//Close database connection. Not compulsory but good practice.
$mysqli->close();

}



?>