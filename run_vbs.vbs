' Run VBS v1

Set fs = CreateObject("Scripting.FileSystemObject")
Set shell = CreateObject("WScript.Shell")

Dim last_path_file
last_path_file = "C:\Windows\Temp\.run_vbs_last_path"

If Not fs.FileExists(last_path_file) Then
	fs.CreateFile(last_path_file)
End If

Set last_path_file_read = fs.OpenTextFile(last_path_file, 1, False)

Dim default
Do While last_path_file_read.AtEndOfStream = False
	default = default & last_path_file_read.ReadLine()
Loop

Dim input
input = InputBox("Welcome to Run VBS!", "Run VBS", default)

If input <> "" Then
	Set last_path_file_write = fs.OpenTextFile(last_path_file, 2, False)
	last_path_file_write.Write(input)
	last_path_file_write.Close()
	
	shell.Run input, 1
End If