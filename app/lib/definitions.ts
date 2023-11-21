// 이 파일에는 데이터에 대한 유형 정의가 포함되어 있습니다.
// 데이터의 모양과 각 속성이 허용해야 하는 데이터 유형을 설명합니다.
// 교육의 단순성을 위해 이러한 유형을 수동으로 정의하고 있습니다.
// 하지만 프리즈마와 같은 ORM을 사용하는 경우에는 이러한 유형이 자동으로 생성됩니다. 이 과정에서는 수정할 필요가 없습니다.

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // TypeScript에서는 이것을 string union type이라고 합니다.
  // 이는 "상태" 속성이 '보류' 또는 '유료'의 두 문자열 중 하나만 될 수 있음을 의미합니다 .
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// 데이터베이스는 금액에 대한 숫자를 반환하지만 나중에 형식Currency 함수가 있는 문자열로 형식을 지정합니다.
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
