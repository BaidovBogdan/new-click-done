import { FilterButton, FooterHome } from '@/shared/ui';
import { BlogCTA, PopularService, FiltersButton, BlogGrid } from '@/widgets';
import { Breadcrumb, ConfigProvider } from 'antd';

export default function Blog() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: {
            itemColor: '#1D1D1FE5',
            lastItemColor: '#1D1D1F73',
            separatorColor: '#1D1D1FE5',
          },
        },
      }}
    >
      <div className='xl:mx-[110px]'>
        <div className='mt-4'>
          <div className='xl:max-w-[1184px] xl:mx-auto'>
            <Breadcrumb
              items={[
                {
                  title: 'Main',
                },
                {
                  title: 'News',
                },
              ]}
            />
          </div>
        </div>
        <div className='mt-6'>
          <BlogCTA />
        </div>
        <div className='mt-6'>
          <PopularService />
        </div>
        <div className='mt-6'>
          <FiltersButton />
        </div>
        <div className='mt-8'>
          <BlogGrid />
        </div>
        <div className='mt-32 xl:-mx-24'>
          <FooterHome />
        </div>
      </div>
    </ConfigProvider>
  );
}
