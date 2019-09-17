class OrderSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price, :created_at
end
