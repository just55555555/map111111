<?php

$conn = mysqli_connect('localhost:3306','1234','1234');
if(!$conn)
{
	die('连接失败'.mysqli_connect_error());
}
else
{
	echo "success";
}

$sql = "CREAT TABLE MM_tbl( "	."MM_id INT NOT NULL AUTO_INCREMENT,"	."MM_name)ENGINE=InnoDB DEFAULT CHARSET=utf8;  ";
mysqli_select_db( $conn, '1234' );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
    die('数据表创建失败: ' . mysqli_error($conn));
}
echo "数据表创建成功\n";
mysqli_close($conn);
?>