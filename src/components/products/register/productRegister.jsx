import { useState } from 'react';
import { categories, unitMeasurement } from '../../../utils/constants';
import InputDefault from '../../inputDefault/inputDefault';
import SelectDefault from '../../selectDefault/selectDefault';
import './product-register.scss';

function ProductRegister() {
    const [product, setProduct] = useState({
        id: '',
        barCode: '',
        name: '',
        costPrice: '',
        salePrice: '',
        netWeight: '',
        grossWeight: '',
        companyBrand: '',
        category: '',
        amountStok: '',
        addStok: '',
        removeStok: '',
        unitMeasurement: '',
        img: '',
        observation: '',
    });

    function getValue(e) {
        setProduct({...product, [e.target.name]: e.target.value});
        console.log(e);
    }

    console.log('Product', product);

    return (
        <div className='product-register'>
            <form className='product-data'>
                <div className='form-title'>
                    <span>Cadastro de Produto</span>
                </div>
                <div className='product-fields'>
                    <section className='id-code-name'>
                        <InputDefault
                            name='id'
                            label='Código'
                            type='text'
                            width='150px'
                            height='28px'
                            value={product.id}
                            onChange={(e) => getValue(e)}
                        />
                        <InputDefault
                            name='barCode'
                            label='Código de Barras'
                            type='text'
                            width='250px'
                            height='28px'
                            value={product.barCode}
                            onChange={(e) => getValue(e)}
                        />
                        <InputDefault
                            name='name'
                            label='Nome'
                            type='text'
                            width='600px'
                            height='28px'
                            value={product.name}
                            onChange={(e) => getValue(e)}
                        />
                        
                    </section>
                    <section className='netWeight-grossWeight-category'>
                        <InputDefault
                            name='costPrice'
                            label='Preço de Custo'
                            type='text'
                            width='150px'
                            height='28px'
                            value={product.costPrice}
                            onChange={(e) => getValue(e)}
                            
                        />
                        <InputDefault
                            name='salePrice'
                            label='Preço de Venda'
                            type='text'
                            width='150px'
                            height='28px'
                            value={product.salePrice}
                            onChange={(e) => getValue(e)}
                        />
                        <InputDefault
                            name='netWeight'
                            label='Peso Líquido'
                            type='text'
                            width='150px'
                            height='28px'
                            value={product.netWeight}
                            onChange={(e) => getValue(e)}
                        />
                        <InputDefault
                            name='grossWeight'
                            label='Peso Bruto'
                            type='text'
                            width='150px'
                            height='28px'
                            value={product.grossWeight}
                            onChange={(e) => getValue(e)}
                        />
                        <InputDefault
                            name='companyBrand'
                            label='Marca'
                            type='text'
                            width='150px'
                            height='28px'
                            value={product.companyBrand}
                            onChange={(e) => getValue(e)}
                        />
                        <SelectDefault
                            name='category'
                            label='Categoria'
                            width='150px'
                            options={categories}
                            value={product.category}
                            onChange={(e) => getValue(e)}
                        />
                    </section>
                    <fieldset className='product-stok'>
                        <legend className='legend'>Estoque</legend>
                        
                        <div className='field'>
                            <span>Estoque Atual</span>
                            <span className='actual-stok'>10</span>
                        </div>
                        <InputDefault
                            name='amountStok'
                            label='Quantidade'
                            type='number'
                            width='100px'
                            height='28px'
                            value={product.amountStok}
                            onChange={(e) => getValue(e)}
                        />
                        <InputDefault
                            name='addStok'
                            label='Adicionar'
                            type='number'
                            width='100px'
                            height='28px'
                            value={product.addStok}
                            onChange={(e) => getValue(e)}
                        />
                        <InputDefault
                            name='removeStok'
                            label='Remover'
                            type='number'
                            width='100px'
                            height='28px'
                            value={product.removeStok}
                            onChange={(e) => getValue(e)}
                        />
                        <SelectDefault
                            name='unitMeasurement'
                            label='Unidade de Medida'
                            width='150px'
                            options={unitMeasurement}
                            value={product.unitMeasurement}
                            onChange={(e) => getValue(e)}
                        />
                    </fieldset>
                    <section className='img-observation'>
                        <div className='photo'>
                            <span>Imagem</span>
                            <img src='' alt='imagem aqui' />
                        </div>
                        <div className='product-observation'>
                            <span>Observação</span>
                            <textarea name='observation' className='observatrion' onChange={(e) => getValue(e)}/>
                        </div>
                    </section>
                </div>
                <div className='product-buttons'>
                    <button>Salvar</button>
                    <button>Editar</button>
                    <button>Cancelar</button>
                    <button>Excluir</button>
                </div>
            </form>
        </div>
    )
}

export default ProductRegister;