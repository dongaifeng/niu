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
import { Select, Input, Button, Form, Space, Upload, Table, Tag } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import NForm from '../NForm';

import styles from './index.module.less';
const { Option } = Select;

import { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export enum FormType {
  Input = 'Input',
  Select = 'Select',
  TextArea = 'TextArea',
  UploadImg = 'UploadImg',
}

export interface FieldsType {
  type: FormType;
  label: string;
  name: string;
  placeholder?: string;
  children?: ReactElement;
  extra?: string;
  rules?: any[];
  options?: Array<{ label: string; key: any; children?: any }>;
  onChange?: (val: any) => void;
}

type IProp = {
  fields: any;
  columns: any;
};

const SearchTable: FC<IProp> = ({ columns, fields }) => {
  return (
    <div>
      <NForm fields={fields} layout="inline" />
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default SearchTable;
