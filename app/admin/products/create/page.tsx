
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { faker } from '@faker-js/faker';
import FormInput from '@/components/form/FormInput';
const createProductAction = async (formData: FormData) => {
  'use server';
  const name = formData.get('name') as string;
  console.log(name);
};

export default function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
        <form action={createProductAction}>
          <FormInput name='name' type='text' label='Product Name' defaultValue={name} />
        
          <Button type='submit' size='lg'>
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}
