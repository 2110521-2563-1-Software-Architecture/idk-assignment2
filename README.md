# idk-assignment2
## idk Team Members
* 6030026021 Kritsana Khankaew
* 6030033321 Kongtap Arunlakvilart
* 6030038521 Kantorn Chitchuen
* 6030478021 Melvin Macaranas
* 6030482421 Yodsavee Lertthirathanaphong
* 6031015221 David Tumcharoen

## Assignment #2: gRPC and REST API Benchmarking

Things to be delivered:
1. Graphs showing the benchmarking results with the explanation of your experimental settings.

2. Discussion of the results why one method is better the other in which scenarios.

Protobuf ซึ่งเป็นรูปแบบการเก็บข้อมูลที่ gRPC ใช้ มีขนาดเล็กกว่า JSON ของ REST API เนื่องจาก Protobuf เป็น binary ซึ่ง JSON ไม่ใช่ นอกจากนี้ Protobuf ยังมีขนาด header ที่เล็กกว่า จากที่ได้กล่าวข้างต้นการที่ข้อมูลมีขนาดเล็กกว่าทำให้สามารถส่งข้อมูลได้เร็วกว่า

3. Comparison of the gRPC and REST API from the aspects of language neutral, ease of use, and performance.

- Language neutral: เนื่องจาก REST API ถูกใช้มาเป็นเวลานาน ทำให้มีภาษาที่รับรองมากกว่า อย่างไรก็ตาม gRPC ก็มีภาษาที่รองรับเพิ่มขึ้นมากภายในช่วงเวลาไม่กี่ปีมานี้

- Ease of use: จากที่ได้กว่าข้างต้น  ผู้ที่เคยใช้ REST API มาก่อนจะพัฒนาระบบที่ใช้ REST API ได้ง่ายกว่า นอกจากนี้ยังกลุ่มผู้ใช้ที่ใหญ่กว่าทำให้ปรึกษาผู้ใช้คนอื่นได้บนเว็บบอร์ด เช่น stackoverflow ส่วนในด้านความยาวของโค้ด REST API มีความยาวสั่นกว่าเล็กน้อย

- Performance: จากสอข้อก่อนหน้า จะเห็นได้ว่า gRPC มีประสิทธิภาพมากว่ากว่า REST API มาก

4. Does your results comply with the results in https://medium.com/@bimeshde/grpc-vs-rest-performance-simplifiedfd35d01bbd4? How?
	
โดยร่วมแล้วคำตอบเป็นไปในทิศทางเดียวกัน gRPC ค่อนข้างจะดีกว่า REST API