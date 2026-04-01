
CREATE TABLE public.doctor_search_queries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  symptoms_summary TEXT,
  specialty_detected TEXT,
  zip_code TEXT,
  insurance_type TEXT,
  results_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.doctor_search_queries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert search queries"
  ON public.doctor_search_queries FOR INSERT
  WITH CHECK (true);
