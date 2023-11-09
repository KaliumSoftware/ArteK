import { postUser } from '../../controllers/userControllers/postUser';

const handlerPostUser = async (req, res) => {
  const { firstName, lastName, gender, birthdate, address, email, password } =
    req.body;
  try {
    if (
      !firstName ||
      !lastName ||
      !gender ||
      !birthdate ||
      !address ||
      !email ||
      !password
    ) {
      throw new Error('Faltan datos');
    }

    /* const hashedPassword = await bcrypt.hash(password, 10); */

    const newUser = {
      firstName,
      lastName,
      gender,
      birthdate,
      address,
      email,
      password: hashedPassword,
      /* image: {
        public_id: 'AUXIE App/Profile photos/Providers/mbvrsqvhpkjdffahemw1',
        secure_url:
          'https://res.cloudinary.com/dvj387b1u/image/upload/v1691558271/AUXIE%20App/Profile%20photos/Providers/mbvrsqvhpkjdffahemw1.png'
      }, */
      isActive: true,
      isAuxie: false
    };

    const createdUser = await postUser(newUser);

    if (createdUser === 'Ya existe ese email') {
      throw new Error(`El correo ${email} ya esta registrado`);
    }

    let pronoun;

    // prettier-ignore
    switch (gender) {
    case 'Masculino':
        pronoun = 'o'
        break
    case 'Femenino':
        pronoun = 'a'
        break
    case 'Otro':
        pronoun = 'e'
        break
    default:
        pronoun = 'x'
        break
    }

    /* const HTMLContent = welcome(); */

    /* const mailOptions = {
      from: `Team Auxie ${process.env.EMAIL}`,
      to: email,
      subject: `Bienvenid${pronoun} ${firstName}`,
      html: HTMLContent
    }; */

    /* await mailSender(mailOptions); */

    res.status(200).json(createdUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = handlerPostUser;
