import React, { FC, useEffect, useState,useMemo, useRef, useLayoutEffect, useCallback } from "react";
import { ReactElement } from "react";
import {

  Select,

  Input,

  Button,

  Form,
  Space,
  Upload,

} from "antd";

import type { MenuProps, PaginationProps } from "antd";

import { useDebounce } from "utils/hooks";
import styles from "./index.module.less";
const { Option } = Select;
const defaultType = 1;


export enum FormType {
  Input = "Input",
  Select = 'Select',
  TextArea = 'TextArea',
  UploadImg = 'UploadImg',
}

export interface FieldsType {
  type: FormType,
  label: string,
  name: string,
  placeholder?: string,
  children?: ReactElement,
  extra?: string,
  rules?: any[],
  options?: Array<{label: string, key: any, children?: any}>,
  onChange?: (val: any) => void
}

type IProp = {
  fields:any
};

const Portal: FC<IProp> = ({fields}) => {
  const [_fields, setFields] = useState<any>([]); // 表单项
  const [initialValues, setInitialValues] = useState<any>({});
  const [form] = Form.useForm();

  // 初始化表单 TODO 走两遍需优化
  useEffect(() => {
    const filedss = fields.map((item: FieldsType, index: number) => {
      switch (item.type) {
        case FormType.Input:
          item.children = <Input placeholder={item?.placeholder} />;
          break;
        case FormType.Select:
          item.children = (
            <Select placeholder={item?.placeholder} onChange={item?.onChange}>
              {item.options &&
                item.options.map((option: any, optId: number) => (
                  <Option key={optId} value={option.id}>
                    {option.label}
                  </Option>
                ))}
            </Select>
          );
          break;
        case FormType.TextArea:
          item.children = <Input.TextArea placeholder={item?.placeholder} />;
          break;
        case FormType.UploadImg:
          item.children = < Upload />;
          break;
        default:
          item.children = <Input placeholder={item?.placeholder} />;
          break;
      }

      return <Form.Item key={item.name} {...item} />;
    });

    // console.log(filedss);

    setFields(filedss);
  }, []);


  const onClick: MenuProps["onClick"] = (e) => {

  };

  // 表单处理 TODO
  const onFinish = (values: any) => {
    console.log("Received values of form:", values, );
  };

  return (
    <div className={styles.box}>

        <Form
          form={form}
          initialValues={initialValues}
          name="portal_form"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
        >
          {_fields}
          {/* <Form.Item
            label="门户图标"
            name="logoUrl"
            extra="支持拓展名jpg/png的小于5mb的图片"
            // valuePropName="fileList"
            // getValueFromEvent={normFile}
          >
            < UploadLogo />
          </Form.Item> */}
          <Form.Item>
            <Space align="end">
              <Button>取 消</Button>
              <Button type="primary" htmlType="submit">
                确 定
              </Button>
            </Space>
          </Form.Item>
        </Form>
    </div>
  );
};

// Portal.FormType = FormType

export default React.memo(Portal) ;
