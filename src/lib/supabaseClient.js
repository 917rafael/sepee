import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://detnvazuxrabutnfhmgz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRldG52YXp1eHJhYnV0bmZobWd6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDQ4ODY4MiwiZXhwIjoyMDQ2MDY0NjgyfQ.ZA2WnijtWtWoLAmB-K7V1MdfaktZWdLmVstEm2wikFQ')
