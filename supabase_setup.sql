-- Create the feedbacks table
CREATE TABLE IF NOT EXISTS public.feedbacks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.feedbacks ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow anyone to read feedbacks
CREATE POLICY "Allow public read access" ON public.feedbacks
  FOR SELECT USING (true);

-- Allow anyone to insert feedbacks
CREATE POLICY "Allow public insert access" ON public.feedbacks
  FOR INSERT WITH CHECK (true);

-- Set up realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.feedbacks;

-- Add comment
COMMENT ON TABLE public.feedbacks IS 'Stores user feedback for the portfolio website'; 