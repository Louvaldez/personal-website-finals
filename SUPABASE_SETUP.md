# Supabase Setup for Feedback Form

This document provides instructions on how to set up Supabase for the real-time feedback form in your portfolio website.

## Step 1: Create a Supabase Account

1. Go to [Supabase](https://supabase.com/) and sign up for a free account
2. Create a new project and give it a name (e.g., "portfolio-feedback")
3. Note down your project URL and anon key (you'll need these later)

## Step 2: Set Up the Database Table

1. In your Supabase dashboard, go to the SQL Editor
2. Copy and paste the contents of the `supabase_setup.sql` file
3. Run the SQL commands to create the necessary table and policies

## Step 3: Configure Environment Variables

1. Open the `.env` file in your project
2. Replace the placeholder values with your actual Supabase credentials:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Step 4: Enable Realtime

1. In your Supabase dashboard, go to Database → Replication
2. Make sure the "Realtime" option is enabled
3. In the "Source Tables" section, ensure that the `public.feedbacks` table is included

## Step 5: Test the Feedback Form

1. Run your application
2. Submit a test feedback through the form
3. Verify that the feedback appears in the list without refreshing the page
4. Open another browser window to confirm that real-time updates work across different clients

## Troubleshooting

- If real-time updates aren't working, check the browser console for errors
- Verify that your Supabase credentials are correct in the `.env` file
- Make sure the Realtime feature is enabled in your Supabase project
- Check that the table name in your code matches the one in Supabase

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Supabase Realtime](https://supabase.com/docs/guides/realtime) 