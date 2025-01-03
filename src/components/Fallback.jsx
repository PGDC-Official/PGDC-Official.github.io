import { Spin } from "antd"

function Fallback() {
  return (
    <Spin tip={"Loading..."} size="large">
      <div className="h-screen w-full bg-transparent" />
    </Spin>
  )
}

export default Fallback