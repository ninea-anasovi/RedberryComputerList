import React from 'react'
import {Formik, Form, Field} from 'formik'

function FormToggle(props) {
    const { fieldName, label, value1, value2 } =props
  return (
    <div>
        
        <Formik
        initialValues={{
            picked: '',
        }}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
        }}
        >
        {({ values }) => (
            <>
                <label htmlFor={fieldName} className="block mb-2 text-sm font-medium mt-8">{label}</label>
                <div role="group" aria-labelledby="my-radio-group">
                    <Field type="radio" name="picked" value={value1}/>
                    <label className='text-sm font-medium ml-4 mr-8'>
                    {value1}
                    </label>
                    <Field type="radio" name="picked" value={value2} />
                    <label className='ml-4 text-sm font-medium'>
                    {value2}
                    </label>
                </div>
            </>
        )}
        </Formik>
    </div>
  )
}

export default FormToggle