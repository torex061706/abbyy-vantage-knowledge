# ABBYY Vantage Knowledge Base

ฐานความรู้สำหรับเขียน ตรวจสอบ และแก้ไข **ABBYY Vantage Document Skill — Advanced Script Rule** โดยเน้นข้อมูลสองกลุ่ม:

1. **ABBYY Official** — เอกสารและ Sample Scripts จาก ABBYY
2. **Verified Use Cases** — กรณีใช้งานที่ผ่านการทดลองในโปรเจกต์ OCR Sale Order

> Repository นี้ไม่ใช่เอกสารทางการของ ABBYY และไม่มีความเกี่ยวข้องกับ ABBYY โดยตรง

## เป้าหมาย

- ลดการสร้าง API หรือ Property ที่ ABBYY ไม่รองรับ
- ทำให้ AI เข้าใจว่าเอกสารใดคือข้อเท็จจริง เอกสารใดคือ Use Case
- ใช้ Pattern เดิมที่ตรวจสอบแล้วก่อนสร้างวิธีใหม่
- แยกข้อมูลที่ยืนยันแล้วออกจากข้อมูลที่ยังต้องทดลอง

## ลำดับการอ่านสำหรับ AI

1. [`AGENTS.md`](AGENTS.md)
2. [`CONTEXT.md`](CONTEXT.md)
3. [`RULES.md`](RULES.md)
4. [`MANIFEST.md`](MANIFEST.md)
5. [`official/`](official/)
6. [`use-cases/`](use-cases/)
7. [`docs/`](docs/)
8. [`templates/`](templates/)
9. [`prompts/`](prompts/)

สำหรับลำดับการทำงานของ AI และวิธีตัดสินว่าเนื้อหาใดควรสร้างหรือหยุดไว้ก่อน อ่าน [`docs/agent-workflow.md`](docs/agent-workflow.md)

## สถานะปัจจุบัน

| ส่วน | สถานะ |
|---|---|
| Context API | Verified — ABBYY Official |
| Field Object | Verified — ABBYY Official |
| Rule Verification | Verified — ABBYY Official |
| Sample Scripts | Verified — ABBYY Official |
| Vendor Validation | Verified — Real Project |
| Address Normalization | Verified — Real Project pattern |
| Delivery Date Normalization | Verified — Real Project |
| Table Validation | Verified — ABBYY Sample |
| JavaScript runtime compatibility | Partial — ยังไม่สรุปครบ |
| Data Catalog in Advanced Script Rule | Conflicting evidence — ห้ามใช้เป็นข้อเท็จจริง |
| SAP mapping contract | Project-specific — ต้องยืนยันกับระบบปลายทาง |

## Quick Example

```javascript
var vendorField = Context.GetField("Vendor Name");

if (!vendorField) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = 'Field "Vendor Name" not found';
    return;
}

if (!vendorField.Value) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Vendor Name is empty";
    return;
}

var vendor = String(vendorField.Text)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

if (vendor.indexOf("thaiparkerizing") === -1) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage =
        'Vendor Name should refer to "THAI PARKERIZING COMPANY LIMITED". Found: '
        + vendorField.Text;
}
```

## Sources

ดูรายการแหล่งอ้างอิงใน [`official/references.md`](official/references.md)
