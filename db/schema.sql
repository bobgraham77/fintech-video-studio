create table if not exists events (
  id bigserial primary key,
  visitor_id text,
  session_id text,
  type text not null,
  meta jsonb,
  utm jsonb,
  created_at timestamptz not null default now()
);
create index if not exists events_created_at_idx on events (created_at);
create index if not exists events_visitor_id_idx on events (visitor_id);
create index if not exists events_type_idx on events (type);

create table if not exists leads (
  id bigserial primary key,
  email text not null unique,
  visitor_id text,
  utm jsonb,
  meta jsonb,
  created_at timestamptz not null default now()
);
create index if not exists leads_visitor_id_idx on leads (visitor_id);
