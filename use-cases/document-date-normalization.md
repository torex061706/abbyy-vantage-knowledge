# Document Date Normalization

## สถานะหลักฐาน

**[VERIFIED REAL PROJECT]** — ออกแบบจาก Use Case จริงของ OCR Sale Order สำหรับ Field `Document Date` โดยรองรับรูปแบบวันที่ที่พบในเอกสาร

## วัตถุประสงค์

แปลง `June 29, 2026` เป็น `29.6.2026` และแปลง `Friday, July 10, 2026` เป็น `10.7.2026` เพื่อให้วันที่มีรูปแบบเดียวกัน

## เงื่อนไขการทำงาน

1. เรียก Field ด้วยชื่อ `Document Date` และตรวจสอบว่า Field มีอยู่ก่อนอ่าน `.Value`
2. ถ้าเป็น `d.m.yyyy` หรือ `dd.mm.yyyy` อยู่แล้ว จะไม่แปลงซ้ำ
3. ตัดชื่อวันด้านหน้าเฉพาะเมื่อคำแรกเป็นชื่อวันภาษาอังกฤษ
4. แปลงชื่อเดือนเป็นเลขเดือน และเขียนค่ากลับเข้า Field เดิม

## Script

โค้ดอยู่ที่ [`JS_Script/Change_Document_Data.js`](../JS_Script/Change_Document_Data.js)

## Test Cases

| Input | Expected Output |
|---|---|
| `June 29, 2026` | `29.6.2026` |
| `Friday, July 10, 2026` | `10.7.2026` |
| `29.6.2026` | `29.6.2026` ไม่แปลงซ้ำ |
| ค่าว่าง | ไม่แก้ไข |
| ไม่พบ Field | Rule ไม่ผ่านและแจ้ง ErrorMessage |

## Rule Configuration Requirements

- ใช้ Advanced Script Rule ที่อนุญาตให้แก้ไข `.Value` ของ Field
- ชื่อ Field ต้องตรงกับ `Document Date` หรือใช้ full path หากอยู่ในกลุ่ม/ตาราง
- ต้องเปิด Field และ parent group/table ที่เกี่ยวข้องให้ Rule เข้าถึงได้

## ข้อจำกัด

- ยังไม่รองรับรูปแบบ `29 June 2026` หรือรูปแบบที่ OCR อ่านผิด
- ไม่ตรวจสอบวันตามปฏิทิน เช่น `31.2.2026`
- การใช้งานต่อกับ SAP/RPA ต้องตรวจสอบ Data Type และรูปแบบตาม export contract แยกต่างหาก

## หลักฐาน

- **[ABBYY OFFICIAL]** `Context.GetField()` และการตรวจสอบ Field ก่อนเข้าถึง `.Value`
- **[VERIFIED REAL PROJECT]** รูปแบบวันที่และความต้องการไม่แปลงซ้ำจากโปรเจกต์ OCR Sale Order
