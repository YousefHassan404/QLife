import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    imageUrl:String,
    email: { type: String, unique: true },
    password:String,
    mobileNumber: String,
    type : String ,
    age: String,
    country: String,
    gender: String,
    // Medical Detatials
    medications: [{  // قائمة بالأدوية
        name: { type: String }, // اسم الدواء
        dosage: { type: String }, // الجرعة
        frequency: { type: String }, // التكرار (عدد مرات الاستخدام)
    }],
    allergies: [{ type: String }], // قائمة بالحساسيات
    emergencyContact: { // معلومات الاتصال بالطوارئ
        name: { type: String, required: false }, // اسم جهة الاتصال
        phone: { type: String, required: false }, // رقم الهاتف
        relationship: { type: String }, // العلاقة (مثلاً: قريب، صديق)
    },
    faintingInstructions: { type: String, required: false }, // ماذا يجب أن يُفعل عند إغماء المريض
    qrCodeUrl: { type: String }, // رابط QR كود المرتبط بالمعلومات الطبية
    lastUpdated: { type: Date, default: Date.now }, // تاريخ آخر تحديث (افتراضيًا تاريخ اليوم)
},{timestamps:true});


export const User=mongoose.model("User",UserSchema);

