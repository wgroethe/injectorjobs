-- Update jobs table to include source information
alter table jobs add column if not exists source_url text;
alter table jobs add column if not exists imported boolean default false;
alter table jobs add column if not exists last_imported_at timestamp with time zone;

-- Create a function to update last_imported_at
create or replace function update_last_imported_at()
returns trigger as $$
begin
  if new.imported = true then
    new.last_imported_at = now();
  end if;
  return new;
end;
$$ language plpgsql;

-- Create trigger for imported jobs
create trigger update_imported_jobs_timestamp
  before insert or update on jobs
  for each row
  execute function update_last_imported_at();