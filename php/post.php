
<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata))
{
$companyname = mysqli_real_escape_string($mysqli, trim($request->companyname));
$jobrole = mysqli_real_escape_string($mysqli, trim($request->jobrole));
$skills = mysqli_real_escape_string($mysqli, trim($request->skills));
$compensation = mysqli_real_escape_string($mysqli, trim($request->compensation));
$jobtype = mysqli_real_escape_string($mysqli, trim($request->jobtype));
$sql = "INSERT INTO postjobs (companyname,jobrole,skills,compensation,jobtype) VALUES ('$companyname','$jobrole','$skills','$compensation','$jobtype')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'companyname' => $companyname,
'jobrole' => '',
'skills' => $skills,
'compensation' => $compensation,
'jobtype' => $jobtype,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}
?>