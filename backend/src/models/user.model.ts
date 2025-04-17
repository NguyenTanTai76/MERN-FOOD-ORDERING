import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  auth0Id: string;
  email: string;
  name?: string;
  addressLine1?: string;
  city?: string;
  country?: string;
}

const UserSchema = new Schema<IUser>(
  {
    auth0Id: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    addressLine1: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Tránh lỗi khi dùng trong môi trường có hot reload (VD: Next.js)
const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
