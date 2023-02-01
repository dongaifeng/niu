import React, {
  FC,
  useEffect,
  useState,
  useMemo,
  useRef,
  useLayoutEffect,
  useCallback,
} from 'react';
import { ReactElement } from 'react';
import { Select, Input, Button, Form, Space, Upload, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { MenuProps } from 'antd';

import styles from './index.module.less';
const { Option } = Select;

export enum FormType {
  Input = 'Input',
  Select = 'Select',
  TextArea = 'TextArea',
  Checkbox = 'Checkbox',
  UploadImg = 'UploadImg',
}

export interface FieldsType {
  type: FormType;
  label: string;
  name: string;
  defaultValue?: any;
  placeholder?: string;
  children?: ReactElement;
  extra?: string;
  rules?: any[];
  options?: Array<{ label: string; key: any; children?: any }>;
  onChange?: (val: any) => void;
}

type IProp = {
  fields: any;
  layout: string;
};

const NForm: FC<IProp> = ({ fields, ...other }) => {
  const [_fields, setFields] = useState<any>([]); // 表单项
  const [initialValues, setInitialValues] = useState<any>({});
  const [form] = Form.useForm();

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
        case FormType.Checkbox:
          const options = item.options
            ? item.options.map(i => ({ label: i.label, value: i.key }))
            : [];
          item.children = (
            <Checkbox.Group
              options={options}
              defaultValue={item.defaultValue || ''}
            />
          );
          break;
        case FormType.TextArea:
          item.children = <Input.TextArea placeholder={item?.placeholder} />;
          break;
        case FormType.UploadImg:
          item.children = (
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          );
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

  const onClick: MenuProps['onClick'] = e => {};

  // 表单处理 TODO
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <div className={styles.box}>
      <Form
        form={form}
        initialValues={initialValues}
        name="form"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}
        {...other}
      >
        {_fields}
        {/* <Form.Item>
          <Space align="end">
            <Button>取 消</Button>
            <Button type="primary" htmlType="submit">
              确 定
            </Button>
          </Space>
        </Form.Item> */}
      </Form>
    </div>
  );
};

export default NForm;
