import sys
import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try :
    client.connect(('localhost', 9999))
    info = sys.argv[1]
    info = info.encode("utf8")
    client.sendall(info)
    response = client.recv(1024)
    response = response.decode("utf8")
    print(eval(response))
finally :
    client.close()
