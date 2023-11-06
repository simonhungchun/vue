import { useRequest } from "vue-request";
import { getQrCode } from "@/api";

export default {
  setup() {
    const { data } = useRequest(getQrCode);
    return () => (
      <div>
        <h1>{data.value.no}</h1>
        <div v-html={data.value.svg}></div>
      </div>
    );
  },
};
