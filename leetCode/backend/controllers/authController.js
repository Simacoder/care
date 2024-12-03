import supabase from '../config';

const registerUser = async (req, res) => {
  const { fullName, email, password, phoneNumber } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  // Store additional user info (Full name, phone number)
  const { error: userError } = await supabase
    .from('users')
    .insert([
      { full_name: fullName, email, phone_number: phoneNumber },
    ]);

  if (userError) {
    return res.status(400).json({ error: userError.message });
  }

  res.status(200).json({ message: 'User registered successfully' });
};

export { registerUser };
