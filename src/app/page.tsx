import { Button, Space } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <Space style={{ width: "100%", margin: "0 auto" }}>
      <Link href="/form">
        <Button>Form</Button>
      </Link>
    </Space>
  );
}
