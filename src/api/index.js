import request from "@/utils/request";

export const getQrCode = async () =>
  (await request.get("/admin/verifycode")).data.data;
